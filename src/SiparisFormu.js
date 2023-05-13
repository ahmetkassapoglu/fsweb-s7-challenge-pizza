import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import "./SiparisFormu.css"
import * as Yup from "yup"
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

const extras = {
    "pepperoni": "Pepperoni",
    "sausage": "Sosis",
    "canadian-ham": "Kanada Jambonu",
    "grilled-chicken": "Tavuk Izgara",
    "onion": "Soğan",
    "tomato": "Domates",
    "corn": "Mısır",
    "sucuk": "Sucuk",
    "jalapeno": "Japaleno",
    "garlic": "Sarımsak",
    "pepper": "Biber",
    "hot-sauce": "Acı Sos",
    "pineapple": "Ananas",
    "courgette": "Kabak"
}



function SiparisFormu(props) {
 const {addExtras} = props
    const example = {
        size: "",
        dimension: "",
        "special-text": "",
        name: "",
        count: "",
        adress: "",
        "pepperoni":false, 
        "sausage": false,
        "canadian-ham": false,
        "grilled-chicken":false,
        "onion": false,
        "tomato": false,
        "corn": false,
        "sucuk": false,
        "jalapeno":  false,
        "garlic":false, 
        "pepper": false,
        "hot-sauce":  false,
        "pineapple":  false,
        "courgette" : false
    }
    const a = 88
const [extrasArray,setExtrasArray] = useState([]) 
const [formErrors,setFormErrros] = useState(example)
    const [counter, setCounter] = useState(1);
    const pizzaPrice = 86.50
    const extrasPrice =  extrasArray.length *5
    const totalPrice = (extrasPrice + pizzaPrice) *counter
    const[isFormValid,SetFormValid] = useState()
    const to = useHistory()
    const [data, setData] = useState(example)

    const inputChange = (e) => {
        const { name, value, checked, type } = e.target; 
        if (  type === "checkbox") {
            setData({ ...data, [value]: checked }) 
            if (value !== true){
            setExtrasArray([...extrasArray,value])
                
            }
        }
        else {
            setData({ ...data, [name]: value })
        }
        console.log(data)
        Yup.reach(schema, name)
		.validate(value)
		.then(valid => SetFormValid(valid))
		.catch(err => { setFormErrros({...formErrors, [name]: err.errors[0] }); }); 


    }
    const increase = () => setCounter(count => count + 1);
    const decrease = () => {
        if (counter > 1) setCounter(count => count - 1);
    };
    const extr = []
    for (const property in extras) {
        extr.push(
            <Label check>
                <Input type="checkbox" name={property} value={property} onChange={inputChange} />{' '}
                {[extras[property]]}
            </Label>)
    }
    const s = Object.keys(extras)
    //Yup
    const schema = Yup.object().shape({
        size: Yup.string().required("en az bir tanesini seçmelisiniz"),
        name: Yup.string().min(2,"en az 2 karakter"),
        dimension: Yup.string().required("Hamur kalınlığı seçmelisiniz"),
        "special-text": Yup.string(),
        adress: Yup.string(),
        "pepperoni": Yup.boolean(),
        "sausage":Yup.boolean(),
        "canadian-ham":Yup.boolean(),
        "grilled-chicken": Yup.boolean(),
        "onion":Yup.boolean(),
        "tomato":Yup.boolean(),
        "corn":Yup.boolean(),
        "sucuk":Yup.boolean(),
        "jalapeno":Yup.boolean(),
        "garlic":Yup.boolean(),
        "pepper":Yup.boolean(),
        "hot-sauce": Yup.boolean(),
        "pineapple": Yup.boolean(),
        "courgette": Yup.boolean(),
    
      })

      useEffect(() => {
        schema.isValid(data).then((valid)=>{
          if (valid) console.log("basarili")
          else console.warn("basarisiz",formErrors)
        })
          },[data])

          useEffect(() => {
            console.log("errors", formErrors)
          },[formErrors])

    return (
        <div className="main">
            <div className="header">
                <div className='header-content'>
                    <h1>Teknolojik Yemekler</h1>
                    <nav>
                        <ul>
                            <li>Anasayfa - </li>
                            <li> Seçenekler - </li>
                            <li> Sipariş Oluştur</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="order-content" >
                <div className="order-details">
                    <h2 className="product-header"> Position Absolute Pizza </h2>
                    <div className="details">
                        <div className='price'><h2>{pizzaPrice} ₺ </h2></div>
                        <div className='other'><p className="starring"> 4.9</p>
                            <p className="id"> (200)</p></div>
                    </div>
                </div>
                <div className="description">
                    <p> Frontend Dev olarak hala position:absolute kullanıyorsan, bu çok acı pizza tam sana göre.
                        Pizza,domates, peynir ve çeşitli diğer malzemelerle kullanılmış, daha sonra geleneksel olarak odun ateşinde yüksek sıcaklıkta
                        pişirilmiş, genellikle yuvarlak, düzleştirilmiş mayalı buğday bzalı hamurdan oluşan italyan kökenli bir lezzetten oluşan yemektir..
                        Küçük pizzaya bazen pizetta denir </p>
                </div>
                <div className="order-options">

                    <Form onSubmit={e => {
                        e.preventDefault()
                        setData(data.count = {counter})
                        axios.post("https://reqres.in/api/orders", data)
                            .then((res) => console.log(res.data))
                        setData(example)
                        addExtras(extrasArray)
                        to.push("/success")
                    }


                    } id='pizza-form'>
                        <FormGroup className='must-options'>
                            <FormGroup className="size-check" check>
                                <h3>Boyut Seç</h3>
                                <Label className='size-element' value={data.size} onChange={inputChange} check>
                                    <span className='size-inputs'>
                                    <Input type="radio" data-cy="small-size" name="size" value="small" />{' '}
                                    Küçük
                                    </span>
                                    <span className='size-inputs'>
                                    <Input type="radio" name="size" value="medium" />{' '}
                                    Orta
                                    </span>
                                    <span className='size-inputs'>
                                    <Input type="radio" name="size" value="large" />{' '}
                                    Büyük
                                    </span>
                                </Label>
                            </FormGroup>


                            <FormGroup className="size-select">
                                <h3>Hamur Seç</h3>
                                <Label for="size-dropdown"></Label>
                                <Input type="select"
                                    defaultValue={"default"}
                                    name="dimension"
                                    id="size-dropdown"
                                    onChange={inputChange}
                                    value={data.dimension} >
                                    <option value="default" disabled selected>Hamur Seçin </option>
                                    <option name="dimension" data-cy="dimension-change" value="thin" >İnce</option>
                                    <option name="dimension" value="medium" >Orta</option>
                                    <option name="dimension" value="thick" >Kalın</option>
                                </Input>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <h2> Ek Malzemeler</h2>
                            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                            <FormGroup className="add-option" check>
                                {extr}
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup className='special'>
                                <Label for="special-text"> Sipariş Notu</Label>
                                <Input type="textarea" name="special-text" data-cy="special" value={data.special} id="special-text" placeholder="Siparişine eklemek istediğin bir not var mı?" onChange={inputChange} />
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className='name-adress'>
                        <FormGroup className='name'>
                            <Label for="name-input" className='name-head' data-cy="name" >İsim</Label>
                            <Input type="text" name="name" id="name-input"
                                placeholder="Lütfen İsminizi Giriniz"
                                value={data.name}
                                onChange={inputChange} />
                                {formErrors.name && <FormFeedback> {formErrors.name} </FormFeedback>}
                        </FormGroup>
                        <FormGroup className='address'>
                            <Label for="name-input" className='adress-head'  >Adres</Label>
                            <Input type="textarea" name="adress" data-cy="address" id="adress-input"
                                placeholder="Lütfen Adresinizi giriniz."
                                value={data.adress}
                                onChange={inputChange} />
                        </FormGroup>
                        </FormGroup>
                        <FormGroup className='final-order'>
                            <hr />
                            <FormGroup className='pizza-count'>
                                <Button id='lower' className='count-element count-button' name="count" onClick={decrease}> - </Button>
                                <p className='count-element'>{counter}</p>
                                <Button id='higher' onClick={increase} name="count" className='count-element count-button'>+</Button>
                            </FormGroup>
                            <FormGroup className='total-count'>
                                <FormGroup className='total-texts'>
                                    <h3>Sipariş Toplamı</h3>
                                    <FormGroup className='total-count-element'>
                                        <p> Seçimler</p> <p>{extrasPrice}₺</p>
                                    </FormGroup>
                                    <FormGroup className='total-count-element .second'>
                                        <p style={{ color: "#CE2829" }}> Toplam </p> <p style={{ color: "#CE2829" }}>{totalPrice} ₺</p>
                                    </FormGroup>
                                </FormGroup>
                                <Button id='order-button' className='submit' data-cy="submit-order" type="submit" disabled={!isFormValid}>
                                    SİPARİŞ VER
                                </Button>
                            </FormGroup>
                        </FormGroup>

                    </Form>

                </div>


            </div>
            <div className='footer'> <br></br>
            <br></br> </div>
        </div>

    )
}
export default SiparisFormu