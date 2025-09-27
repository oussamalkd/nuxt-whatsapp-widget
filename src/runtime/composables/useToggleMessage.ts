import { useState } from "#app"

export const useToggleMessage = () => {
    const status = useState('active', () => false)

    const toggleStatus = () => status.value = !status.value

    return { status, toggleStatus }
}
