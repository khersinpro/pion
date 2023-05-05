class Table
{
    // Fonction pour créer et retourné un table selon une longueur
    static getTable(tableLength) {
        let table               =   document.createElement('table');
        table.style.cssText     =   "border: 2px solid; boder-collapse: collapse;";

        // Création des rows et des cells
        for (let x = 0; x < tableLength; x++)
        {
            let tr = table.insertRow();
            
            for (let y = 0; y < tableLength; y++)
            {
                let td = tr.insertCell()
                td.style.cssText    =   "border: 1px solid; height: 100px; width: 100px; font-size: 0px;";
            }
        }
        return table;
    }
}