//DateISOString => DD/MM/YYYY
export const dateFormatter = (date: string): string => {
  const [year, month, day] = date.split('T')[0].split('-');
  return `${day}/${month}/${year}`;
};
//DateISOString => hh:mm
export const timeFormatter = (date: string): string => {
  const [hr, min] = date.split('T')[1].split(':');
  return `${hr}:${min}`;
};

export const newISOString = (date: Date): string => {
  const tzoffset = (date).getTimezoneOffset() * 60000;
  const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
  return localISOTime;
}