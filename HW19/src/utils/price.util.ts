export function parsePrice(priceText: string): number {
    return Number(priceText.replace(/\D/g, ''));
}
