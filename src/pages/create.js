import React, { useState } from "react";
import { useAppContext } from "../store/store";
import NavbarComponent from "../components/Navbar";

const CreateComponent = () => {
	const [product, setProduct] = useState({
		article: "",
		price: "",
		image: "",
		description: ""
	});

	const store = useAppContext();


	function handleSubmit(e) {
		e.preventDefault();
		const newProduct = {
			id: crypto.randomUUID(),
			...product
		};
		//TODO mandar a registrar
		const a = JSON.parse(localStorage.getItem('products')) || [];
		a.push(newProduct);
		localStorage.setItem('products', JSON.stringify(a));
		document.location.href = "/"
	}


	function handleOnChangeFile(e) {
		const element = e.target;
		var file = element.files[0];
		var reader = new FileReader();
		reader.onloadend = function () {
			console.log("RESULT", reader.result);
			setProduct({ ...product, image: reader.result.toString() });
		};
		reader.readAsDataURL(file);
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
				<div className="d-flex justify-content-center">
					<div className="card">
						<div className=" form-container">
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
								<input type="file" name="imagen" onChange={handleOnChangeFile} />
								<div>{!!product.image ? <img src={product.image} width="200" /> : ""}</div>
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
							<br />
							<br />
							<div className="text-center">
							<button className="button" type="submit" >
								Guardar
							</button>
							</div>
						</div>
					</div>
				</div>
			</form >
		</div >
	);
}
export default CreateComponent;