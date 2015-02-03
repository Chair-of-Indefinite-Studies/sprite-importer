describe('sprite', function(){
    it('should be present', function(){
        expect(sprite).toBeDefined();
    });

    it('should sport an Importer', function(){
        expect(sprite.Importer).toBeDefined();
    });

    describe('Importer', function(){
        var importer;

        beforeEach(function(){
            importer = new sprite.Importer();
        });

        it('should be created', function(){
            expect(importer).toBeDefined();
        });

        it('should have an import method', function(){
            expect(importer.import).toBeDefined();
            expect(typeof importer.import).toBe("function");
        });

        describe('#import', function(){
            var data;

            beforeEach(function(){
                data = {
                    "columns": 15,
                    "rows": 10,
                    "palette": ["rgba(0,0,0,1)", "rgba(255,0,0,1)"],
                    "pixels": [
                        [[0, 0], [1, 0], [2, 0]],
                        [[12, 9], [13, 9], [14, 9]]
                    ]
                };
            });

            it('should hold the number of columns', function(){
                var model = importer.import(data);

                expect(model.columns).toBe(15);
            });

            it('should hold the number of rows', function(){
                var model = importer.import(data);

                expect(model.rows).toBe(10);
            });

            it('should hold the pixels', function(){
                var model = importer.import(data);

                data.pixels[0].forEach(function(coordinates){
                    expect(model.colorAt(coordinates[0], coordinates[1])).toBe(data.palette[0]);
                });
            });
        });
    });
});
