<<<<<<< HEAD
import { useCallback } from 'react';
import { getFilterText } from '../../lib/data';
import { ListBox } from '../../../../shared/ui/ListBox/ListBox';
import { setFilter } from '../../model/slices/slice';
import { useDispatch, useSelector } from 'react-redux';

export const FilterItem = ({ filter, options }) => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.filter[filter]);

    const handleSelect = useCallback((option) => {
        dispatch(setFilter({ filter, option }))
    }, [dispatch, filter])
=======
import { useDispatch, useSelector } from "react-redux";
import { ListBox } from "../../../../shared/ui/ListBox/ListBox";
import { getFilterText } from "../../lib/data";
import { useCallback } from "react";
import { setFilter } from "../../model/slices/slice";

export const FilterItem = ({ filter, options }) => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.filter[filter])
    // const handleSelect = useCallback((option) => {
    //     // dispatch(setFilter(filter, option))
    //     console.log(filter,option)
    // }, [dispatch, filter])
>>>>>>> main

const handleSelect = ()=> {
    console.log(filter, options)
}
    return (
        <ListBox
            filter={getFilterText(filter)}
            options={options}
            selected={selected}
            changeSelect={handleSelect}
            badge
        />
    )
}
