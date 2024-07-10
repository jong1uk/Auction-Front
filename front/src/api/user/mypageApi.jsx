import { SERVER_URL } from "../serverApi";
import jwtAxios from "pages/user/jwtUtil";

export const getMypageData = async () => {
    try {
        const res = await jwtAxios.get(`${SERVER_URL}/mypage`);
        return res.data;
    } catch (error) {
        console.error('getMypageData error...', error);
        throw error;
    }
};

export const getBuyHistory = async () => {
    try {
        const res = await jwtAxios.get(`${SERVER_URL}/mypage/buyHistory`);
        return res.data;
    } catch (error) {
        console.error('getBuyHistory error...', error);
        throw error;
    }
};

export const getSaleHistory = async () => {
    try {
        const res = await jwtAxios.get(`${SERVER_URL}/mypage/saleHistory`);
        return res.data;
    } catch (error) {
        console.error('getSaleHistory error...', error);
        throw error;
    }
};

export const getBookmarkProducts = async () => {
    try {
        const res = await jwtAxios.get(`${SERVER_URL}/mypage/bookmark/product`);
        return res.data;
    } catch (error) {
        console.error('getBookmarkProducts error...', error);
        throw error;
    }
}

export const getDrawHistory = async () => {
    try {
        const res = await jwtAxios.get(`${SERVER_URL}/mypage/drawHistory`);
        return res.data;
    } catch (error) {
        console.error('getDrawHistory error...', error);
        throw error;
    }
}

export const getAccount = async () => {
    try {
        const res = await jwtAxios.get(`${SERVER_URL}/mypage/account`);
        return res.data;
    } catch (error) {
        console.error('Error fetching account:', error);
        throw error;
    }
};

export const registerOrModifyAccount = async (account) => {
    try {
        const res = await jwtAxios.post(`${SERVER_URL}/mypage/account`, account);
        return res.data;
    } catch (error) {
        console.error('Error registering or modifying account:', error);
        throw error;
    }
};