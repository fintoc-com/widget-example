import Widget from './widget';

function createWidget({
  title = 'Sample Widget',
  onSuccess = () => {},
  onEvent = () => {},
  onExit = () => {},
}) {
  const widget = new Widget({
    title,
    onSuccess,
    onEvent,
    onExit,
  });
  return widget;
}

export default { create: createWidget };
