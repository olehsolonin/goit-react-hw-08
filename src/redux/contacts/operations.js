import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


// GET @ /contacts
export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/contacts');
			return res.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// POST @ /contacts
export const addContact = createAsyncThunk(
	'contacts/addContact',
	async ({ name, number }, thunkAPI) => {
		try {
			const res = await axios.post('/contacts', { name, number });
			return res.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkAPI) => {
		try {
			const res = await axios.delete(`/contacts/${contactId}`);
			return res.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);