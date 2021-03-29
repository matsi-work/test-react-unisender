export const getDateFormat = (dateStr: string) => {
	const data = new Date(dateStr);

	return `From ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
};