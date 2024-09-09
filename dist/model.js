var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
originalCost = "4";
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    var c = originalCost;
}
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "Macbook",
    inventoryType: "computer",
    trackingNumber: "230324",
    createDate: new Date(),
});
function updatedInventoryItem(trackingNumber, item) {
}
updatedInventoryItem("230324", {
    displayName: "Macbook",
    trackingNumber: 9,
});
//# sourceMappingURL=model.js.map