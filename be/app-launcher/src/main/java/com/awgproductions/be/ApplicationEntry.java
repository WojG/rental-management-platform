package com.awgproductions.be;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class ApplicationEntry {

    public static void main(String[] args) {
        new SpringApplicationBuilder()
                .sources(ApplicationEntry.class)
                .build()
                .run(args);
    }
}
