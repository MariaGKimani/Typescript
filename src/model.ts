let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost = 425 ;
originalCost = "4"

if(typeof originalCost === "number"){
    let cost: number = originalCost
}
else{
    let c : string = originalCost
}

enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture",    
}

interface InventoryItem{
    displayName: string,
    inventoryType: "computer" | "furniture ",
    readonly trackingNumber: string,
    originalCost?: number,
    createDate: Date

    addNote?: (note: string) => string;

}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;

}
function saveInventoryItem(item: InventoryItem){
}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "Macbook",
    inventoryType: "computer",
    trackingNumber: "230324",
    createDate: new Date(),
});