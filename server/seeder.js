import Product from "./models/product.js";

class Seeder{

    static async seedData(){

        // Delete all products

        await Product.deleteMany()

        await Product.create({name: "Artichoke", category: "veggie", description: "Naturally grown, organic vegetablesNaturally grown, organic vegetables", price: 2.95, image: "https://images.unsplash.com/photo-1550866616-392c08549a0b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Avocado", category: "veggie", description: "Naturally grown, organic vegetables", price: 3, image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Carrots", category: "veggie", description: "Naturally grown, organic vegetables", price: 4, image: "https://images.unsplash.com/photo-1584526896127-c5cfc9e434e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Potato", category: "veggie", description: "Naturally grown, organic vegetables", price: 7, image: "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Berry Amareto", category: "full flavour", description: "chocolate, vanilla, flour, sugar, whipped cream", price: 1.5, image: "https://images.unsplash.com/photo-1563778084459-859099e48677?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Chocolate Cake", category: "dairy free", description: "Natural dairy product", price: 2, image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Black Sage", category: "multiflower", description: "Naturally grown, organic honey", price: 17, image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Blue Berry", category: "single origin", description: "Naturally grown, organic honey", price: 16, image: "https://plus.unsplash.com/premium_photo-1672130779170-c71d34169786?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Broccoli", category: "veggie", description: "Naturally grown, organic vegetables", price: 1.85, image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Cauliflower", category: "veggie", description: "Naturally grown, organic vegetables", price: 4, image: "https://images.unsplash.com/photo-1613743990305-736d763f3d70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Sea Salt", category: "dairy free", description: "Natural dairy product", price: 2.75, image: "https://images.unsplash.com/photo-1612476957058-3328f66cbea7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Bourbon Vanilla", category: "full flavour", description: "chocolate, vanilla, flour, sugar, whipped cream", price: 2, image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Eggplant", category: "veggie", description: "Naturally grown, organic vegetables", price: 3.5, image: "https://images.unsplash.com/photo-1528826007177-f38517ce9a8a?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Manuka Honey", category: "premium", description: "Naturally grown, organic honey", price: 16.5, image: "https://images.unsplash.com/photo-1555211652-5c6222f971bc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Chocolate Delight", category: "full flavour", description: "chocolate, vanilla, flour, sugar, whipped cream", price: 3.75, image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Cinamon Almond", category: "sugar free", description: "chocolate, vanilla, flour, whipped cream", price: 3.5, image: "https://images.unsplash.com/photo-1521886580989-e18b74350ba4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Large Family", category: "mixed veg", description: "Mixed organic vegetables", price: 10, image: "https://images.unsplash.com/photo-1584473457406-6240486418e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Spinach", category: "veggie", description: "Naturally grown, organic vegetables", price: 1.5, image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Pumpkin", category: "veggie", description: "Naturally grown, organic vegetables", price: 6, image: "https://images.unsplash.com/photo-1603947214027-2c4c36cc4dfd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Pup cake", category: "sugar free", description: "chocolate, vanilla, flour, whipped cream", price: 2.75, image: "https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Salad", category: "veggie", description: "Naturally grown, organic vegetables", price: 1.7, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Tomato", category: "veggie", description: "Naturally grown, organic vegetables", price: 2.5, image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Tropical Vanilla Cake", category: "full flavour", description: "chocolate, vanilla, flour, sugar, whipped cream", price: 1.85, image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "kales", category: "veggie", description: "Naturally grown, organic vegetables", price: 2.8, image: "https://images.unsplash.com/photo-1523143093721-2cb542ba354d?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
        await Product.create({name: "Wild Flower", category: "premium", description: "Naturally grown, organic honey", price: 18.8, image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})
    
        // Finish seeding data
        console.log("Done seeding data.......")
    }
}

export default Seeder