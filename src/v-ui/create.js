function create({ components }) {
  return (app) => {
    (Array.isArray(components) ? components : Object.values(components)).forEach((component) => {
      app.component(component.name, component);
    });
  };
}

export default create;
