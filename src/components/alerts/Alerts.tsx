type AlertType = 'success' | 'error';

interface AlertsProps {
  type?: AlertType;
  title: string;
  message: string;
  onClose: () => void;
}

const Alerts = ({ type = 'success', title, message, onClose }: AlertsProps) => {
  const colors: Record<
    AlertType,
    {
      bg: string;
      border: string;
      text: string;
      darkBg: string;
      darkText: string;
      darkBorder: string;
    }
  > = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-800',
      darkBg: 'dark:bg-gray-800',
      darkText: 'dark:text-green-400',
      darkBorder: 'dark:border-green-800'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      text: 'text-red-800',
      darkBg: 'dark:bg-gray-800',
      darkText: 'dark:text-red-400',
      darkBorder: 'dark:border-red-800'
    }
  };

  const style = colors[type];

  return (
    <div
      className={`p-4 mb-4 border rounded-lg ${style.bg} ${style.border} ${style.text} ${style.darkBg} ${style.darkText} ${style.darkBorder}`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <button
          onClick={onClose}
          className={`text-sm px-2 py-1 rounded ${style.text} border ${style.border} hover:bg-opacity-20`}
        >
          Cerrar
        </button>
      </div>
      <p className="mt-2 text-sm">{message}</p>
    </div>
  );
};

export default Alerts;
