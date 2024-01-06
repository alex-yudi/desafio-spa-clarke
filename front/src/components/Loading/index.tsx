import { LoadingCircle, LoadingOverlay } from "./styles";

export function Loading() {
    return (
        <LoadingOverlay>
            <LoadingCircle />
        </LoadingOverlay>
    )
}