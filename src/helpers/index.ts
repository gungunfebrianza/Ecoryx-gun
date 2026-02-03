import { format, fromZonedTime } from 'date-fns-tz';
import { toast } from 'react-toastify';

export function formatNumber(value: number) {
  if (isNaN(value)) return 0;
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(value);
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
}

export const waitAsync = (sec: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), sec));

export const alertToast = (type: 'success' | 'error' | 'info' | 'warning', message: string, id?: string) => {
  switch (type) {
    case 'success':
      toast.success(message, { toastId: id });
      break;
    case 'error':
      toast.error(message, { toastId: id });
      break;
    case 'info':
      toast.info(message, { toastId: id });
      break;
    case 'warning':
      toast.warning(message, { toastId: id });
      break;
  }
};

export const formatDateTime = (value: string) => {
  const zonedDate = fromZonedTime(value, 'UTC');
  const formatted = format(zonedDate, 'dd/MM/yyyy HH:mm:ss', { timeZone: 'UTC' });
  return formatted;
};
