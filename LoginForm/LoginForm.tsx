import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from "../styles/login.module.css"

export default function LoginForm() {

	const [panelMovementClass, setClass] = useState('right-panel-active')
	const [isRightPanel, setRightPanel] = useState(true)

	useEffect(() => {
		isRightPanel ? setClass('right-panel-active') : setClass('')
	})

	return (
		<div className={classNames(styles.container, styles[panelMovementClass])}>
			<div className={classNames(styles['form-container'], styles['sign-up-container'])}>
				<form action="#" className={styles.form}  >
					<h1 className={styles.h1}>Create Account</h1>
					<div className={styles['social-container']}>
						<a href="#" className={classNames(styles.social, styles.a)}><i className={classNames(styles.fab, styles['fa-facebook-f'])}></i></a>
						<a href="#" className={classNames(styles.social, styles.a)}><i className="fab fa-google-plus-g"></i></a>
						<a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
					</div>
					<span className={styles.span}>or use your email for registration</span>
					<input className={styles.input} type="text" placeholder="Name" name='name' />
					<div>
					</div>
					<input className={styles.input} type="email" placeholder="Email" name='email' />
					<input className={styles.input} type="password" placeholder="Password" name='password' />
					<button className={styles.button} type='submit' >Sign Up</button>
				</form>
			</div>
			<div className={classNames(styles['form-container'], styles['sign-in-container'])}>
				<form action="#" className={styles.form} >
					<h1 className={styles.h1}>Sign in</h1>
					<div className={styles['social-container']}>
						<a href="#" className={styles.social}><i className={classNames(styles.fab, styles['fa-facebook-f'])}></i></a>
						<a href="#" className={styles.social}><i className={classNames(styles.fab, styles['fa-google-plus-g'])}></i></a>
						<a href="#" className={styles.social}><i className={classNames(styles.fab, styles['fa-linkedin-in'])}></i></a>
					</div>
					<span className={styles.span}>or use your account</span>
					<input className={styles.input} type="email" placeholder="Email" />
					<input className={styles.input} type="password" placeholder="Password" />
					<a href="#">Forgot your password?</a>
					<button className={styles.button} type='submit'>Sign In</button>
				</form>
			</div>
			<div className={styles['overlay-container']}>
				<div className={styles.overlay}>
					<div className={classNames(styles['overlay-panel'], styles['overlay-left'])}>
						<h1>Welcome Back!</h1>
						<p>To keep connected with us please login with your personal info</p>
						<button onClick={() => setRightPanel(false)} className={classNames(styles.ghost, styles.button)} id="signIn">Sign In</button>
					</div>
					<div className={classNames(styles['overlay-panel'], styles['overlay-right'])}>
						<h1 className={styles.h1}>Hello, Friend!</h1>
						<p className={styles.p}>Enter your personal details and start journey with us</p>
						<button onClick={() => setRightPanel(true)} className={classNames(styles.ghost, styles.button)} id="signUp">Sign Up</button>
					</div>
				</div>
			</div>
		</div>


	)
}
