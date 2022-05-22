import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero h-screen bg-accent mt-5 ">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h2 className='text-3xl text-center font-bold text-primary uppercase'>Login</h2>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-lg">Email</span>
                        </label>
                        <input type="text" placeholder="Email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-lg">Password</span>
                        </label>
                        <input type="text" placeholder="Password" class="input input-bordered" />
                        <label class="label">
                            <Link to="#" class="label-text-alt link link-hover text-lg">Forgot password?</Link>
                        </label>
                    </div>
                    <div class="form-control mt-3">
                        <button class="btn btn-primary text-lg">Login</button>
                    </div>
                    <div class="divider">OR</div>
                    <button class="btn btn-primary btn-outline">CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
};

export default Login;