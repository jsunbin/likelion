import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import { useLogout } from '../hooks/useLogout'

export default function Header() {
    const { logout} = useLogout();
    
    return (
        <header>
            <div className={styles["header-wrap"]}>
                <h1>
                    <Link to="/">
                        <img className="logo" src={logo} alt="두근두근 비밀일기" />
                    </Link>
                </h1>
                <div>
                    <Link to="/signup" className="btn-join">회원가입</Link>
                    <Link to="/" className='btn-logoout' onClick={logout}>로그아웃</Link>
                </div>
            </div>
        </header>
    )
}
