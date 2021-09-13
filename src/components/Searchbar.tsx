import React from 'react';
import { Search } from '../data/Icons';
import '../styles/src/search.scss';

export interface SearchType {
    placeholder?: string;
    onSubmit: React.DOMAttributes<HTMLFormElement>['onSubmit'];
}

export default function Searchbar({ onSubmit, placeholder }: SearchType) {
    return (
        <form className='searchbar' onSubmit={onSubmit}>
            <input type='text' placeholder={placeholder || 'Search'} />
            <button type='submit'>
                <Search />
            </button>
        </form>
    );
}
