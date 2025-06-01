
import { useEffect, useState } from "react";
import { GetItemCategories, GetItems } from "../apis/catalog";
import Item from "../components/Item";
import { data } from "react-router-dom";

export default function Catalog() {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const retrieveItems = async () => {
        try {
            const items = await GetItems();
            setItems(items);
            console.log(items);
        } catch (error) {
            // TODO - mostrar alert
            console.error("Error al obtener los items", error);
        }
    }

    const retrieveCategories = async () => {
        try {
            const categories = await GetItemCategories();
            setCategories(categories);
            console.log(categories);
        } catch (error) {
            // TODO - mostrar alert
            console.error("Error al obtener las categorías", error);
        }
    }

    useEffect(() => {
        const fetchItems = async () => {
            await retrieveItems();
            await retrieveCategories();
        }

        fetchItems();
    }, [])


    // Filtro
    const filteredItems = selectedCategory !== 'all' ?
        items.filter(item => {
            return item.category === selectedCategory
        }) : items;

    return (
        // Faltan estilos!
        // TODO - incluir algún encabezado

        <div>
            <div>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

            </div >
            <div>
                {filteredItems.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div >
        </div>

    )
}
