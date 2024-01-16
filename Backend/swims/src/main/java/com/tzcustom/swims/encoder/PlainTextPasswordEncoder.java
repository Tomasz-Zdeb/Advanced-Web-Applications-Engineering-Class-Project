package com.tzcustom.swims.encoder;

import org.springframework.security.crypto.password.PasswordEncoder;

public class PlainTextPasswordEncoder implements PasswordEncoder {

    @Override
    public String encode(CharSequence rawPassword) {
        // Simply returns the raw password
        return rawPassword.toString();
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        // Checks if the raw password matches the 'encoded' (actually plain) password
        return rawPassword.toString().equals(encodedPassword);
    }
}
