package com.example.demo.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.model.Table;

@Repository
public class TableRepository {

    public List<Table> findAll() {

        List<Table> tables =
                new ArrayList<>();

        tables.add(
                new Table(
                        "T1",
                        true
                )
        );

        tables.add(
                new Table(
                        "T2",
                        false
                )
        );

        tables.add(
                new Table(
                        "T3",
                        true
                )
        );

        tables.add(
                new Table(
                        "T4",
                        true
                )
        );

        tables.add(
                new Table(
                        "T5",
                        false
                )
        );

        return tables;
    }
}