class FileReader {
    Read(path) {
        console.log('File content!');
    }
}

class FileWriter {
    Write(fileName, content) {
        console.log('Content.');
    }
}

class FileCreator {
    Create(fileName) {
        console.log('File created!');
    }
}

class FileDeleter {
    Delete(fileName) {
        console.log('File deleted!');
    }
}

class FileManipulator {
    // instance
    constructor(fileName) {
        // attribute
        this.fileName = fileName;
        // composition allows the code reuse
        this.fileReader = new FileReader();
        this.fileWriter = new FileWriter();
        this.fileCreator = new FileCreator();
        this.fileDeleter = new FileDeleter();
    }

    // // simple way
    // // methods
    // ReadFile() {
    //     console.log('Reading...');
    // }

    // WriteFile(data) {
    //     console.log('Writing data...');
    // }

    // CreateFile(fileName) {
    //     console.log(`Creating file ${fileName}.`);
    // }

    // DeleteFile(fileName) {
    //     console.log(`Deleting file ${fileName}.`);
    // }
}

class UserManager {
    // instance
    constructor() {
        // attribute
        this.fileCreator = new FileCreator();
        this.fileWriter = new FileWriter();
    }

    SaveUsersList(list) {
        this.fileCreator.Create('users.txt');
        this.fileWriter.Write('users.txt', list);
    }
}

let manipulator = new FileManipulator('myfile.txt');

manipulator.fileReader.Read();
manipulator.fileWriter.Write();
manipulator.fileCreator.Create();
manipulator.fileDeleter.Delete();

let users = new UserManager();

users.SaveUsersList(['Carl', 'Joseph', 'John', 'Megan']);
