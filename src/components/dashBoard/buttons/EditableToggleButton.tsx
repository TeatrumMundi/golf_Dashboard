import { Eye, EyeOff } from 'lucide-react';

interface EditableToggleButtonProps {
    isEditable: boolean;
    toggleEditable: () => void;
}

export default function EditableToggleButton({ isEditable, toggleEditable }: EditableToggleButtonProps) {
    return (
        <button
            onClick={toggleEditable}
            className="btn-primary absolute bottom-1 left-1 bg-zinc-700 rounded-sm p-0.5 hover:bg-zinc-600"
        >
            {isEditable ? (
                <EyeOff className="w-6 h-6 text-cyan-400 hover:text-cyan-700" />
            ) : (
                <Eye className="w-6 h-6 text-cyan-400 hover:text-cyan-700" />
            )}
        </button>
    );
}