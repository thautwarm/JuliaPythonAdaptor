var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = JuliaPythonAdaptor","category":"page"},{"location":"#JuliaPythonAdaptor","page":"Home","title":"JuliaPythonAdaptor","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"JuliaPythonAdaptor is a small Julia/Python package that helps you to create relocatable applications integrated with Julia and Python together.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The Julia programs using JuliaPythonAdaptor can be compiled by PackageCompiler into sysimages or executables that will work on another machine, if binary-compatible.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Install a julia (>=1.6.1) distribution. Add it to $PATH if you want to avoid manual configurations.\nInstall a Python (3.7+) distribution. Add it to $PATH if you want to avoid manual configurations.\nFor the Python distribution: pip install https://github.com/thautwarm/JuliaPythonAdaptor or pip install JuliaPythonAdaptor\nFor the Julia distribution: julia -e \"using Pkg; Pkg.add(\\\"JSON\\\", \\\"JuliaPythonAdaptor\\\")\"","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Optionally) Setting up the necessary environment variables for being relocatable. The functional environment variables provided by JuliaPythonAdaptor is listed in Configurations\nIf you call Julia from Python, import JuliaPythonAdaptor before import juliacall.\nIf you call Python from Julia, import JuliaPythonAdaptor before using PythonCall.","category":"page"},{"location":"#Configurations","page":"Home","title":"Configurations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Environment Variable Description Default Value\nJPADAPTORPY_EXE the Python executable path python found in $PATH\nJPADAPTORJL_EXE the Julia executable path julia found in $PATH\nJPADAPTORJL_PROJ the Julia project that will be activated the global Julia project\nJPADAPTORJL_IMAGE the Julia Sysimage that will be used decided by the julia program\nJPADAPTORJLDEPOTPATH deciding JULIA_DEPOT_PATH decided by the julia program","category":"page"}]
}
