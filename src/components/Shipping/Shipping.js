import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="form" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <br />
                <input {...register("email", { required: true })} />
                <br />
                {errors.email && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;