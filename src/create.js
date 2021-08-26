function create(components, options) {
  return (app) => {
    (Array.isArray(components) ? components : Object.values(components)).forEach((component) => {
      app.use(component, options);
    });
  };
}

export default create;
