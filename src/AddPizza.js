import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { useHistory } from 'react-router';
import * as yup from 'yup';
const formValidationSchema = yup.object(
    {
        name: yup.string().min(4).required("Why not fill the name?"),
        toppings: yup.string().required("Why not fill the Toppings?"),
        image: yup.string().required("why not fill the image?"),
        rating: yup.number().min(0).max(5).required("Why not fill the rating")
    }
);

export function AddPizza() {

  const sty = { width: "60%", margin: "1rem" };
  const styl = { color: "black" };
  const history = useHistory();
  // const [name, setName] = useState();
  // const [rate, setRate] = useState();
  // const [milage, setMilage] = useState();
  // const [pic, setPic] = useState();
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name: "",
      toppings: "",
      image: "",
      rating: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (newpizza) => {
      console.log("onsubmit", newpizza);
      addpizza(newpizza);
    },
  });
  const addpizza = (newpizza) => {

    console.log(newpizza);
    fetch("https://6166c4e813aa1d00170a6717.mockapi.io/pizza",
      {
        method: "POST",
        body: JSON.stringify(newpizza),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => history.push("/pizza"));
  };
  return (
    <div className="pizza">
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          value={values.name}
          style={sty}
          label="Model Name"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={errors.name}
          placeholder="Pizza Name" /><br />
        <TextField
          id="toppings"
          name="toppings"
          style={sty}

          label="Toppings"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.toppings && touched.toppings}
          helperText={errors.toppings}
          placeholder="Toppings" /><br />
        <TextField
          id="image"
          name="image"
          style={sty}

          label="Image"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.image && touched.image}
          helperText={errors.image}
          placeholder="Image url" /><br />
        <TextField
          id="rating"
          name="rating"
          style={sty}

          label="Rating"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.rating && touched.rating}
          helperText={errors.rating}
          placeholder="Rating" /><br />
        <Button style={styl} variant="outlined" type="submit">ADD</Button>
      </form>

    </div>
  );
}
