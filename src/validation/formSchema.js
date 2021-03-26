import * as yup from "yup";

export default yup.object().shape({
    username: yup
    .string()
    .required('username is required')
    .min(2, 'username must be longer than two characters'),
    pizzaSize: yup
    .number()
    .required('pizza size is required'),
    extraCheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    meatball: yup.boolean(),
    specialInstructions: yup
    .string()
});