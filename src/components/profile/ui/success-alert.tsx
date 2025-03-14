type SuccessAlertProps = {
  message: string;
};

export default function SuccessAlert({ message }: SuccessAlertProps) {
  return (
    <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
      {message}
    </div>
  );
}
