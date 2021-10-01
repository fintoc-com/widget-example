import $window from '$window';
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

$window.WidgetExample = { create: createWidget };
