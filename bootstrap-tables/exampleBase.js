function eventsAlarms(){

    function loading() {
        var custom = $(`<span class="loading-wrap"><span class="animation-wrap"><span class="animation-dot"></span></span></span>`)
        return custom[0].outerHTML;
    }

    async function listAlarms() {
        try {
            $("#alarms-table").html('');

            let alarms = data;
            let arrData = [];

            $.each(alarms, (index, value) => {
                arrData.push(value);
            });

            $('#alarms-table').bootstrapTable({
                data: arrData,
                search:"true",
                pageSize: 5,
                pageList: "[5,10,25]",
                pagination: "true",
                filterOptions: {
                    filterAlgorithm: 'and'
                },
                loadingTemplate: loading,
                columns: [{
                            field: 'severity',
                            sortable: 'true',
                            align: 'center',
                            title: 'Severidade' ,
                            formatter: severityFormatter
                        }, {
                            field: 'name',
                            sortable: 'true',
                            align: 'start',
                            title: 'Nome' 
                        }, {
                            field: 'device',
                            sortable: 'true',
                            align: 'start',
                            title: 'Dispositivo'
                        }, {
                            field: 'start-date-time',
                            sortable: 'true',
                            align: 'left',
                            title: 'Horário de início'
                        }]
            })

            $('.search-input').attr('style', 'width: 28rem');
            $('.search-input').attr('placeholder', 'Pesquisar');
            
            function severityFormatter(value, row) {
                var name;
                if (value === 'critical') {
                    name = `<span class="badge badge-danger badge-pill">critical</span>`;
                } else if (value === 'warning'){
                    name = `<span class="badge badge-warning badge-pill">warning</span>`;
                } else if (value === 'alert'){
                    name = `<span class="badge badge-alert badge-pill">alert</span>`;
                }else if (value === 'info'){
                    name = `<span class="badge badge-info badge-pill">info</span>`;
                }
                return name;
            }

        } catch (err) {
            console.log('document.ready Catch Error', err);
        }
    }

    listAlarms();
}

function filterOptions() {
    console.log($('#comboboxSeverity').val().split(','))
    $('#alarms-table').bootstrapTable('filterBy', {
        'severity': $('#comboboxSeverity').val().split(',')
    })
}