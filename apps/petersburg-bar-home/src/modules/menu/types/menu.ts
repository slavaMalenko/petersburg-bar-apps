export interface MenuItem {
    src: string;
    name: string;
    weight: number;
    description: string;
    price: number;
}
export type MenuItems = MenuItem[] | undefined;
