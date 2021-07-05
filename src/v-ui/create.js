function create(options) {
  const { components } = options;
  return (app) => {
    components.forEach((component) => {
      app.component(component.name, component);
    });
  };
}

export default create;
