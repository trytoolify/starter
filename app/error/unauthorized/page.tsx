export default function AccessDenied() {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-108px)]">
            <p>Sorry, your access token has expired or you don&apos;t have the necessary permissions to access this
                content.</p>
        </div>
    );
}