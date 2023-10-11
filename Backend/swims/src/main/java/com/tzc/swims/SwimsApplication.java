package com.tzc.swims;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class SwimsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SwimsApplication.class, args);
	}

}
