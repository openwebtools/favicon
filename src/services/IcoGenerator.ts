export default class IcoGenerator {
  public createIcoFile(blob: Blob, imageSize: number): Blob {
    const icoFile = [];

    // Set header
    icoFile.push(this.createHeader());

    // Set Icon Metadata
    icoFile.push(new Uint8Array([imageSize <= 256 ? imageSize : 0]).buffer);
    icoFile.push(new Uint8Array([imageSize <= 256 ? imageSize : 0]).buffer);

    icoFile.push(new Uint8Array([0, 0, 1, 0]).buffer);

    icoFile.push(new Uint8Array([32, 0]).buffer);

    icoFile.push(new Uint32Array([blob.size]).buffer);

    icoFile.push(new Uint32Array([22]).buffer);

    icoFile.push(blob);

    return new Blob(icoFile, {
      type: "image/vnd.microsoft.icon",
    });
  }

  private createHeader(): Uint8Array {
    return new Uint8Array([0, 0, 1, 0, 1, 0]);
  }
}
