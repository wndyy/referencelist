// JavaScript Document



$(document).ready(function(){
    $('#category').on('change',function(){
        var categoryID = $(this).val();
	    if(categoryID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
				data:'category_id='+categoryID,
				success:function(html){
                	if(categoryID!='SelectAll'){
					$('#subcategory').html(html);	
                    $('#displayresults').html('Select subcategory'); 
					}
					else
					{
					$('#subcategory').html('<option value="">Select All</option>');		
					$('#displayresults').html(html); 
					}
					
                }
            }); 
        }else{
            $('#subcategory').html('<option value="">Select category first</option>');
            $('#displayresults').html('<option value="">Select subcategory first</option>'); 
        }
    });
    
    $('#subcategory').on('change',function(){
        var subcategoryID = $(this).val();
		var pageID = 0;
        if(subcategoryID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
                data:{'subcategory_id':subcategoryID,'page_id':+pageID},
			    success:function(html){
				$('#displayresults').html(html);
                }
            }); 
        }else{
            $('#displayresults').html('no data found'); 
        }
    });
	

	});
	
	function SelectAllSubFirstPage (CategoryID) {
		var subcategoryID= 'SelectAll '+CategoryID;
		var pageID = 0;
        if(subcategoryID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
                data:{'subcategory_id':subcategoryID,'page_id':+pageID},
			    success:function(html){
				$('#displayresults').html(html);
                }
            }); 
        }else{
            $('#displayresults').html('no data found'); 
        }
  
		
	}
	

	function SelectAllFirstPage() {
		
		var categoryIDAll = 'SelectAll';
		if(categoryIDAll){
			 $.ajax({
                type:'POST',
                url:'ajaxData.php',
				data:'category_id='+categoryIDAll,
				success:function(html){
					$('#subcategory').html('<option value="">Select All</option>');		
					$('#displayresults').html(html); 
				}
				
				});
				
			
		}
		else{
            $('#subcategory').html('<option value="">Select category first</option>');
            $('#displayresults').html('<option value="">Select subcategory first</option>'); 
        }
		
		
	}
	
	
	function SelectAllNextPage(SubCatLimit,ProductLimit, pageID) {
		
		var SubCatLimit=SubCatLimit;
		var ProductLimit=ProductLimit;
		var pageID=pageID;
		if(SubCatLimit || ProductLimit){
			 $.ajax({
                type:'POST',
                url:'ajaxData.php',
				data:{'subCat_limit_next':+SubCatLimit,'product_limit_next':+ProductLimit, 'page_id':+pageID},
				success:function(html){
					$('#subcategory').html('<option value="">Select All</option>');		
					$('#displayresults').html(html); 
				}
				
				});
				
			
		}
	}
	
	
	function SelectAllSubNextPage(CategoryID, SubCatLimit,ProductLimit, pageID) {
		
		var SubCatLimit=SubCatLimit;
		var ProductLimit=ProductLimit;
		var pageID=pageID;
		var CategoryID=CategoryID;
		if(SubCatLimit || ProductLimit || CategoryID){
			 $.ajax({
                type:'POST',
                url:'ajaxData.php',
				data:{'category_SubSelectAll_ID':+CategoryID,'subCat_selectall_next':+SubCatLimit,'product_SubSelectAll_next':+ProductLimit, 'page_subSelectAll_id':+pageID},
				success:function(html){
					$('#subcategory').html('<option value="">Select All</option>');		
					$('#displayresults').html(html); 
				}
				
				});
				
			
		}
	}
	
	
		function SelectAllLastPage() {
		
		var SelectAllLastpage = 'LastPage';
		if(SelectAllLastpage){
			 $.ajax({
                type:'POST',
                url:'ajaxData.php',
				data:'SelectAllLastpage='+SelectAllLastpage,
				success:function(html){
					$('#subcategory').html('<option value="">Select All- last</option>');		
					$('#displayresults').html(html); 
				}
				
				
			
				});
		}
				
				else {
				 $('#displayresults').html('Error'); 
				}
				
				
	}

	


	
	
	
	function AjaxCall(Cid) {
	
     var CompanyID=Cid;
        if(CompanyID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
                data:'company_id='+CompanyID,
                success:function(html){
				$('#displayresults').html(html);
                }
            }); 
        }else{
            $('#displayresults').html('no data found'); 
       }
  
    
    }
	

	
	function pages(sID, pID) {
    var subcategoryID = sID;
	var pageID = pID;
        if(subcategoryID){
            $.ajax({
                type:'POST',
                url:'ajaxData.php',
                data:{'subcategory_id':+subcategoryID,'page_id':+pageID},
			    success:function(html){
				$('#displayresults').html(html);
                }
            }); 
        }else{
            $('#displayresults').html('no data found'); 
        }
    
    }
    
	
