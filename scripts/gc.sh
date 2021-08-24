#! /bin/bash

NAME=$1
COMPONENT=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../src/components" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"

cat > $DIRNAME/$COMPONENT.vue <<EOF
<template>
  <div :class="\`\${prefix}-${COMPONENT}\`">
    {{name}}
  </div>
</template>
<script>
export default ({
  name: '${COMPONENT}',
  data() {
    return {
      prefix: this.\$VUI.prefix,
    };
  },
});
</script>
<style lang="scss">
@import './${COMPONENT}.scss';
</style>
EOF

cat >"$DIRNAME/index.js" <<EOF
import ${NAME} from './${COMPONENT}.vue';

export default ${NAME};
EOF

cat > $DIRNAME/$COMPONENT.scss <<EOF
@import '../../styles/var.scss';

.${COMPONENT}{}
EOF

echo "alter src/components.js; add ->> import ${NAME} from '@/components/${COMPONENT}';";