import apiClient from "@/lib/apiClient";

export function userLogin(payload: { email: string, password: string }) {
    return apiClient("/auth/login", { method: "POST", body: payload })
}

export function userLogout() {
    return apiClient("/auth/logout", { method: "POST" })
}

export function googleOAuth(idToken: string) {
    return apiClient("/auth/google", { method: "POST", body: idToken })
}

export function getMe() {
    return apiClient("/auth/me")
}