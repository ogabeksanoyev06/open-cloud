export function formatPrice(price, locale = 'en-US', currency = 'USD') {
	const formatter = new Intl.NumberFormat(locale, {
		currency: currency,
		minimumFractionDigits: 0, // O'nlik raqamlar soni
		maximumFractionDigits: 0 // O'nlik raqamlar soni
	});
	return formatter.format(price);
}
