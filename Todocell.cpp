#include <cstdlib>   // For system function
#include <iostream>  // For console output
#include <direct.h>

#ifdef _WIN32
#include <windows.h>  // For MessageBox on Windows
#else
#include <unistd.h>   // For POSIX systems
#endif

void displayErrorMessage(const char* message) {
#ifdef _WIN32
    MessageBox(NULL, message, "Error", MB_ICONERROR | MB_OK);
#else
    std::cerr << "Error: " << message << std::endl;
#endif
}

int main() {
    
    #ifdef _WIN32
	    char buffer[MAX_PATH];
	    GetModuleFileName(NULL, buffer, MAX_PATH);
	    std::string fullPath(buffer);
	    std::string::size_type pos = fullPath.find_last_of("\\/");
	    std::string currentPath = fullPath.substr(0, pos);
	#else
	    char buffer[PATH_MAX];
	    ssize_t len = readlink("/proc/self/exe", buffer, sizeof(buffer)-1);
	    if (len != -1) {
	        buffer[len] = '\0';
	        std::string fullPath(buffer);
	        std::string::size_type pos = fullPath.find_last_of("/");
	        std::string currentPath = fullPath.substr(0, pos);
	    }
	#endif

    std::cout << "Current directory: " << currentPath << std::endl;
    
    
    // Change directory to TodoCellFront/
    #ifdef _WIN32
	    int chdirResult = _chdir((currentPath + "\\TodoCellFront").c_str());
	#else
	    int chdirResult = chdir((currentPath + "/TodoCellFront").c_str());
	#endif
	

    if (chdirResult == 0) {
        // Ping the local MongoDB database
        int pingResult = system("ping 127.0.0.1");  // Change the IP if needed

        if (pingResult != 0) {
            // Handle database ping error
            std::cerr << "Error: Unable to ping the database." << std::endl;
            // You can also display a message box or some other form of user notification here
        } else {
            // Database ping successful
            std::cout << "Database ping successful." << std::endl;
            
            // Open the .html file
            int openResult = system("ng serve --open");  // On Windows

            // If you're on a different operating system (e.g., Linux), you might use something like:
            // int openResult = system("xdg-open index.html");  // On Linux

            if (openResult != 0) {
                // Handle error opening file
                return 1;
            }
        }
    } else {
        // Handle error changing directory
        std::cout << "File parent not found." << std::endl;
        return 1;
    }

    return 0;
}

