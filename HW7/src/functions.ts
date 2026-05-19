export function addElements(elements: string[]): string | undefined;
export function addElements(elements: number[]): number | undefined;
export function addElements(elements: string[] | number[]): string | number | undefined {
    if (elements.length === 0) return;

    const initial = getInitialValueByType(typeof elements[0]);

    return (elements as number[]).reduce((sum, element) => sum + element, initial as number);
}

function getInitialValueByType(type: string): string | number {
    return type === 'number' ? 0 : '';
}
