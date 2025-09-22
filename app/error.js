'use client';

export default function Error({ error, reset }) {
    return (
        <div className="min-h-[400px] flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
                <p className="text-gray-600 mb-4">{error.message}</p>
                <button
                    onClick={() => reset()}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}