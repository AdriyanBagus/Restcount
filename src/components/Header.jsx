import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";

function SignUpButton() {
  const clerk = useClerk();

  const handleSignUp = () => {
    clerk.openSignUp({
      afterSignUpUrl: '/count',  // URL setelah signup berhasil
    });
  };

  return (
    <button className="sign-up-btn" onClick={handleSignUp}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  const handleSignIn = () => {
    clerk.openSignIn({
      afterSignInUrl: '/count',  // URL setelah signin berhasil
    });
  };

  return (
    <button className="sign-in-btn" onClick={handleSignIn}>
      Sign in
    </button>
  );
}

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>RESTCOUNT</h1>
      </div>
      <div className="navbar-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/count" className="nav-link">Counting</Link>
      </div>
      <div className="navbar-right">
        <SignedOut>
          <ul className="auth-buttons">
            <li>
              <SignUpButton />
            </li>
            <li>
              <SignInButton />
            </li>
          </ul>
        </SignedOut>
        <SignedIn>
          <div className="user-button-wrapper">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </header>
  );
}

export default Header;
