
"use client";
import React, { useEffect, useState } from 'react';
import { UseCase, Bcf } from '../types';

const Sidebar: React.FC = () => {
    const [useCases, setUseCases] = useState<UseCase[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://demo6396395.mockable.io/bcf-boards')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                if (!Array.isArray(data.boards)) {
                    throw new Error('Invalid data format');
                }
                setUseCases(data.boards);
            })
            .catch(error => {
                console.error('Error fetching data:', error.message);
                setError('Failed to fetch data');
            });
    }, []);

    if (!useCases) {
        return <p>Loading...</p>;
    }


    return (
        <div className="sidebar">
            <h2>Industry</h2>
            {useCases.map((useCase, index) => (
                <div key={index}>
                    <h3>{`Use Case ${useCase.id}`}</h3>
                    <ul>
                        {useCase.bcfs.map((bcf: Bcf, bcfIndex: number) => (
                            <li key={bcfIndex}>{`BCF ${bcf.id}`}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
