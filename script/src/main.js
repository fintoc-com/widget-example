import Widget from './widget';

function createWidget({
  title = 'Sample Widget',
  onEvent = () => {},
  onExit = () => {},
}) {
  const widget = new Widget({
    title,
    onEvent,
    onExit,
  });
  return widget;
}

export default { create: createWidget };
