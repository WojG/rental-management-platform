package com.awgproductions.be.exception;

import org.springframework.core.NestedRuntimeException;

public class ResourceNotFoundException extends NestedRuntimeException {

    public ResourceNotFoundException(final String msg) {
        super("Unable to find resource " + msg);
    }
}
