import React, { useState } from "react";
import { useAppContext } from "../store/store";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/Navbar";

const CreateComponent = () => {
	const [product, setProduct] = useState({
		article: "",
		price: "",
		image: null,
		description: ""
	});

	const store = useAppContext();


	 /**  function handleOnChangeFile(e) {
			const element = e.target;
			const file = element.files[0];
			const reader = new FileReader();

			reader.readAsDataURL(file);

			reader.onloadend = function () {
					setImage(reader.result.toString());
			}
			

	}*/

	function handleSubmit(e) {
		e.preventDefault();
		const newProduct = {
			id: crypto.randomUUID(),
			...product
		};
		alert('Producto Ingresado')

		//TODO mandar a registrar
		store.createItem(newProduct);
	}

	const handleInputChange = (e) => {
		// eslint-disable-next-line no-undef
		e.preventDefault();
		const input = e.target;
		const { name, value } = input;
		setProduct({ ...product, [name]: value });
	}

	return (
		<div >
			<NavbarComponent />

			<form onSubmit={handleSubmit}>
				<div className="col-md-3 form-container">
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input className="form-control"
						type="text"
						name="article"
						onChange={handleInputChange}
						value={product.article}>
					</input>
				</div>
				<div>
				<label className="form-label">Precio</label>
					<input className="form-control"
						type="text"
						name="price"
						onChange={handleInputChange}
						value={product.price}>
					</input>
				</div>
				<div>
					<label className="form-label">Imagen</label>
					<input className="form-control"
						type="text"
						name="image"
						
						value={product.description}>
					</input>
				</div>
				<div>
					<label className="form-label">Descripción</label>
					<input className="form-control"
						type="text"
						name="description"
						onChange={handleInputChange}
						value={product.description}>
					</input>
				</div>
				<br/>
				<br/>
				<button className="button" type="submit" >
					Guardar
				</button>
		</div>
				
			</form >
		</div >
	);
}
export default CreateComponent;