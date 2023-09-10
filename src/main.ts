import { createServer } from "./utils/createServer"
import { dbconnect } from "./utils/dbconnect"
const PORT = 3000;

(function main(){
    dbconnect();
    const app = createServer()

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/ `);
    })

    
})();
